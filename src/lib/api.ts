export function getAuthHeaders(didSession: string, apikey: string) {
  return {
    'Content-Type': 'application/json',
    authorization: `Bearer ${didSession}`,
    'x-api-key': `${apikey}`,
  }
}
