/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../utils/system";
import "./styles.css";

type FormData = {
  userName: string;
};

type profileGithub = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

export default function ProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });

  const [profileGithub, setProfileGithub] = useState<profileGithub>({
    avatar_url: "",
    url: "",
    followers: "",
    location: "",
    name: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;

    setFormData({ ...formData, userName: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    axios
      .get(`${BASE_URL}/${formData.userName}`)
      .then((response) => {
        setProfileGithub(response.data);
        console.log(response.data);
      })
      .catch(() => {
        //@ts-expect-error-undefined
        return setProfileGithub(undefined);
      });
  }

  return (
    <section className="profile-form-section">
      <div className="profile-form-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="Usuario github"
          />
          <button type="submit">Encontrar</button>
        </form>
      </div>
      {profileGithub && formData ? (
        <div className="profile-container">
          <div>
            <img src={profileGithub.avatar_url} alt={profileGithub.name} />
          </div>
          <div className="info-container">
            <h2>Informações</h2>
            <div className="field">
              <span>Perfil:</span>
              <a href={profileGithub.url}>{profileGithub.url}</a>
            </div>
            <div className="field">
              <span>Seguidores:</span>
              <p>{profileGithub.followers}</p>
            </div>
            <div className="field">
              <span>Localidade:</span>
              <p>{profileGithub.location}</p>
            </div>
            <div className="field">
              <span>Nome:</span>
              <p>{profileGithub.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="notfound-container">
          <h1>Erro ao buscar usuario</h1>
        </div>
      )}
    </section>
  );
}
