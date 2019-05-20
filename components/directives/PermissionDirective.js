export const permission = (node, dir) => {

    const jwt=
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiWydhZG1pbicsJ3VzZXInXSIsImlhdCI6MX0.ksyG1wzXX9h0uAmMFiMtEyZoLO7ldBTcnQ7ZrjYNYBw";
      
    global.atob = require("atob");
    const payload = JSON.parse(atob(jwt.split(".")[1]));
    let roles = payload.role;

    if (!node.style) {
        node.style = {};
    }

    dir.value.forEach(element => {
        if (roles.includes(element)) {
            node.style.display = 'block';
        }
        else {
            node.style.display = 'none';
        }
    });
};
