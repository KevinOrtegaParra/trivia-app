import { axiosConfig } from "../configurations/axiosConfig";

export const ObtenerRanking = () => {
    return axiosConfig.get('/users/ranking', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const ObtenerUser = () => {
    return axiosConfig.get('/users/me', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const atualizarVidaLose = () => {
  return axiosConfig.put("/users/loseLife", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const atualizarVidalivel = () => {
  return axiosConfig.put("/users/liveLife", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const atualizarpuntos = (data = {}) => {
  return axiosConfig.put("/users/raisePoints", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const atualizarUsuario = (datos = {}) => {
  return axiosConfig.put("/users", datos, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Cerrar sesión
export const logoutUsuario = () => {
  localStorage.removeItem("token");
};
