import { PanelUser, Alert } from "@/types";

export function getActiveUser(): PanelUser {
  return {
    id: "u-777",
    displayName: "Test Account",
    email: "test@mail.com",
    image: "/avatars/test.jpg",
    access: "user",
  };
}

export async function getAlerts(userId: string): Promise<Alert[]> {
  await new Promise(r => setTimeout(r, 100));
  return [
    { id: "1", kind: "info", text: "Welcome aboard!", seen: false, created: "2026-04-18" },
    { id: "2", kind: "success", text: "Profile updated", seen: true, created: "2026-04-17" },
  ];
}

export async function getStats(userId: string) {
  await new Promise(r => setTimeout(r, 100));
  return {
    views: Math.floor(Math.random() * 5000),
    visits: Math.floor(Math.random() * 800),
    dropOff: (Math.random() * 100).toFixed(1),
  };
}