export const validateName = (name) => {
  const re = /[^a-zà-ú]/gi;
  let response = "";

  if (re.test(name)) response = "Seu nome deve ter apenas letras";
  else if (name.length < 3) response = "Seu nome deve ter pelo menos 3 letras";
  else if (name.length > 100)
    response = "Seu nome deve ter no máximo 100 letras";

  return response;
};

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return re.test(email) ? "" : "Email inválido!";
};

export const validatePassword = (password) => {
  let response = "";

  if (password.length < 6)
    response = "Sua senha deve ter pelo menos 6 caracteres";
  else if (password.length > 20)
    response = "Sua senha deve ter no máximo 20 caracteres";

  return response;
};