import http from "../utils/http";

export function getTodoList() {
  return http.get();
}

export function updateItem({ id, content, status }) {
  return http.put(`/${id}`, {
    id,
    content,
    status: status,
  });
}

export function addItem({ content, status }) {
  return http.post("",{
    content,
    status,
  });
}

export function deleteItem({ id }) {
  return http.delete(`/${id}`);
}
