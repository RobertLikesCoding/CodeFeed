const url = "https://www.reddit.com/r/"

export default async function fetchBestReddits() {
  try {
    const response = await fetch(`${url}best.json`, {
      method: "GET"
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      return data;
    }
  } catch (error) {
    console.error("The following error has occured: ", error)
  }
}