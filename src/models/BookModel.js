import * as DbAdapter from "../storage/DbAdapter";
import * as Constants from "../storage/Constants";

export async function GetAllBooks() {
  try {
    return await DbAdapter.GetAllBooks().then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function SearchHint() {
  try {
    return await DbAdapter.SearchHint().then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function AuthorsHint() {
  try {
    return await DbAdapter.AuthorsHint().then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function GetStats() {
  try {
    return await DbAdapter.GetStats().then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function SearchBook(queryString) {
  try {
    return await DbAdapter.SearchBook(queryString).then((response) =>
      response.json()
    );
  } catch (error) {
    console.warn(error);
  }
}

export async function GetBooksByStatus(status) {
  try {
    return await DbAdapter.GetBooksByStatus(status).then((response) =>
      response.json()
    );
  } catch (error) {
    console.warn(error);
  }
}

export async function SaveBook(book) {
  try {
    return await DbAdapter.UpsertBook(book).then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function DeleteBook(book) {
  try {
    return await DbAdapter.DeleteBook(book).then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function CreateAuthor(book) {
  try {
    return await DbAdapter.CreateAuthor(book).then((response) =>
      response.json()
    );
  } catch (error) {
    console.warn(error);
  }
}

export async function GetAuthorsHints() {
  try {
    let book = JSON.parse(JSON.stringify(Constants.EMPTY_BOOK));
    return await DbAdapter.GetAuthors(book).then((response) => response.json());
  } catch (error) {
    console.warn(error);
  }
}

export async function ChechAuthorExists(book) {
  try {
    let response = await DbAdapter.GetAuthors(book);
    let responseJson = await response.json();
    if (responseJson.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.warn(error);
  }
}
