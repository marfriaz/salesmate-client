import TokenService from "./token-service";
import config from "../config";

const AccountApiService = {
  getAccounts() {
    return fetch(
      `${config.API_ENDPOINT}/accounts`,
      {
        mode: "cors",
        credentials: "include",
      },
      {
        headers: {},
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAccountsByName(name) {
    return fetch(`${config.API_ENDPOINT}/accounts?name=${name}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAccount(accountId) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteAccount(accountId) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
      method: "DELETE",
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAccountByStage(stage) {
    return fetch(`${config.API_ENDPOINT}/accounts/stage/${stage}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAccountNotes(accountId) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountId}/notes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAccountContacts(accountId) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountId}/contacts`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postAccount({
    name,
    stage,
    website,
    industry,
    territory,
    employee_range,
    phone,
    fax,
    linkedin,
    street,
    city,
    zip_code,
    state,
    country,
  }) {
    return fetch(`${config.API_ENDPOINT}/accounts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name,
        stage,
        website,
        industry,
        territory,
        employee_range,
        phone,
        fax,
        linkedin,
        street,
        city,
        zip_code,
        state,
        country,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateAccount(accountId, updates) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updates),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateAddress(accountId, updates) {
    return fetch(`${config.API_ENDPOINT}/addresses/${accountId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updates),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postNote(accountId, text) {
    return fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        account_id: accountId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateNote(noteId, updates) {
    return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updates),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteNote(noteId) {
    return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postContact(accountId, name, title, phone, email) {
    return fetch(`${config.API_ENDPOINT}/contacts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        account_id: accountId,
        name,
        title,
        phone,
        email,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateContact(contactId, updates) {
    return fetch(`${config.API_ENDPOINT}/contacts/${contactId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updates),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteContact(contactId) {
    return fetch(`${config.API_ENDPOINT}/contacts/${contactId}`, {
      method: "DELETE",
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default AccountApiService;
