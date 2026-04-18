export interface PanelUser {
  id: string;
  displayName: string;
  email: string;
  image: string;
  access: "admin" | "user";
}

export interface Alert {
  id: string;
  kind: "info" | "warning" | "success";
  text: string;
  seen: boolean;
  created: string;
}