import { useEffect, useState } from "react";
import client from "../../services/client";
import { HomeContainer, HomeStyle, StyledSelect } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { getHeadersRequest } from "../../utils";
import { Country, LeagueData } from "../../interfaces/Home/home";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const headersRequest = getHeadersRequest();

  const fetchCountries = async () => {
    try {
      const { data, status } = await client.get("/countries", headersRequest);
      setCountries(data.response);
    } catch (e) {
      console.error(e);
      toast.error("Ops. Ocorreu um erro ao buscar os países. Tente novamente");
    }
  };

  const fetchSeason = async () => {
    try {
      const { data, status } = await client.get("/leagues/seasons", headersRequest);
      setSeasons(data.response);
    } catch (e) {
      console.error(e);
      toast.error("Ops. Ocorreu um erro ao buscar os países. Tente novamente");
    }
  };

  const fetchLeagues = async () => {
    try {
      const { data, status } = await client.get(
        `/leagues?country=${selectedCountry}`,
        headersRequest
      );
      setLeagues(data.response);
    } catch (e) {
      console.error(e);
      toast.error("Ops. Ocorreu um erro ao buscar os países. Tente novamente");
    }
  };

  const fetchTeams = async () => {
    try {
      const { data, status } = await client.get(`/teams?league=${selectedLeague}`, headersRequest);
      setLeagues(data.response);
    } catch (e) {
      console.error(e);
      toast.error("Ops. Ocorreu um erro ao buscar os países. Tente novamente");
    }
  };

  console.log(selectedCountry);

  useEffect(() => {
    fetchCountries();
    fetchSeason();
  }, []);

  useEffect(() => {
    selectedCountry && fetchLeagues();
  }, [selectedCountry]);

  return (
    <>
      <ToastContainer />
      <HomeStyle>
        <HomeContainer>
          <div>
            <label>
              Selecione um país
              <StyledSelect onChange={({ target }) => setSelectedCountry(target.value)}>
                <option selected value="">
                  Selecione
                </option>
                {countries?.map((country: Country) => {
                  return <option value={country.name}>{country.name}</option>;
                })}
              </StyledSelect>
            </label>
          </div>
          <div>
            <label>
              Selecione uma temporada
              <StyledSelect
                disabled={!selectedCountry}
                onChange={({ target }) => setSelectedSeason(Number(target.value))}
              >
                <option selected value="">
                  Selecione
                </option>
                {seasons?.map((season: number) => {
                  return <option value={season}>{season}</option>;
                })}
              </StyledSelect>
            </label>
          </div>
          <div>
            <label>
              Selecione uma liga
              <StyledSelect
                disabled={!selectedSeason}
                onChange={({ target }) => setSelectedLeague(target.value)}
              >
                <option selected value="">
                  Selecione
                </option>
                {leagues?.map(({ league }: LeagueData) => {
                  return <option value={league.id}>{league.name}</option>;
                })}
              </StyledSelect>
            </label>
          </div>
          <div>
            <label>
              Selecione um time
              <StyledSelect disabled={!selectedLeague}>
                <option selected value="">
                  Selecione
                </option>
              </StyledSelect>
            </label>
          </div>
        </HomeContainer>
      </HomeStyle>
    </>
  );
}

export default Home;
