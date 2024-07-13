/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";

const GOOGLE_MAPS_API_KEY = "AIzaSyAMR0g0QOUBQiHoZMLjMovMkzjJ7VkUBuU";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };
const placesService = { current: null };
const geocoderService = { current: null };

const GoogleMaps = ({ latitude, longitude }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !loaded.current) {
      if (!document.querySelector("#google-maps")) {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
          document.querySelector("head"),
          "google-maps",
        );
      }
      loaded.current = true;
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const initializeGeocoder = () => {
        if (!geocoderService.current && window.google) {
          geocoderService.current = new window.google.maps.Geocoder();
        }

        const latlng = {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
        };

        if (geocoderService.current) {
          geocoderService.current.geocode(
            { location: latlng },
            (results, status) => {
              if (status === "OK" && results[0]) {
                setValue(results[0]);
                setInputValue(results[0].formatted_address);
              } else {
                console.error("지오코딩에 실패했습니다.");
              }
            },
          );
        } else {
          console.error("Geocoder 서비스가 초기화되지 않았습니다.");
        }
      };

      // 구글 맵 스크립트가 로드되었는지 확인
      if (window.google) {
        initializeGeocoder();
      } else {
        console.error("Google Maps API가 아직 로드되지 않았습니다.");
      }
    }
  }, [latitude, longitude]);

  const fetch = useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }

    if (!placesService.current && window.google) {
      placesService.current = new window.google.maps.places.PlacesService(
        document.createElement("div"),
      );
    }

    if (!autocompleteService.current || !placesService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const handlePlaceSelect = (event, newValue) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);

    if (newValue && newValue.place_id && placesService.current) {
      placesService.current.getDetails(
        { placeId: newValue.place_id },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            console.log("Latitude:", place.geometry.location.lat());
            console.log("Longitude:", place.geometry.location.lng());
          }
        },
      );
    }
  };

  return (
    <Autocomplete
      id="google-map-demo"
      sx={{ width: 300 }}
      getOptionLabel={option =>
        typeof option === "string"
          ? option
          : option.description || option.formatted_address
      }
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="건물명, 도로명, 지번으로 검색하세요."
      onChange={handlePlaceSelect}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={params => (
        <TextField
          {...params}
          placeholder="건물명, 도로명, 지번으로 검색하세요."
          fullWidth
        />
      )}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        const matches =
          option.structured_formatting?.main_text_matched_substrings || [];
        const parts = parse(
          option.structured_formatting?.main_text || "",
          matches.map(match => [match.offset, match.offset + match.length]),
        );

        return (
          <li key={key} {...optionProps}>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sx={{ display: "flex", width: 44 }}>
                <LocationOnIcon sx={{ color: "text.secondary" }} />
              </Grid>
              <Grid
                item
                sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
              >
                {parts.map((part, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                  >
                    {part.text}
                  </Box>
                ))}
                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting?.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};

GoogleMaps.propTypes = {
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GoogleMaps;
