export const TOKEN_KEY = "@managerUser-Token";
export function isAuthenticated(){localStorage.getItem(TOKEN_KEY) !== null};
export function getToken(){localStorage.getItem(TOKEN_KEY)};

export function login (token){
  localStorage.setItem(TOKEN_KEY, token);
};
export function logout(){
  localStorage.removeItem(TOKEN_KEY);
};