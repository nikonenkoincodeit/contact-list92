const BASE_URL = 'http://localhost:3000/contacts/';
// function saveData(data) {
//   return fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText || res.status);
//     }
//     return res.json();
//   });
// }

async function saveData(data) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.statusText || response.status);
  }
  return response.json();
}

function getData() {
  return fetch(BASE_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}

function deleteData(id) {
  return fetch(BASE_URL + `/${id}`, {
    method: 'DELETE',
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText || resp.status);
    }
    return resp.json();
  });
}

export { saveData, getData, deleteData };
