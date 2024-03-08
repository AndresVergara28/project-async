const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCM4rh_dxsOS326u6KlQMXbw&part=snippet%2Cid&order=date&maxResults=3";

const contentContainer = document.querySelector("#content");
const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    part: "snippet,id",
    order: "date",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c1710cae0dmsh345493a534ff46ap15bd69jsnc21d8f4390a5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

const anotherFn = async (urlApi) => {
  try {
    const data = await fetchData(urlApi);
    const videos = data.items;

    for (const video of videos) {
      const videoToAdd = document.createElement("div");
      videoToAdd.classList.add("group");
      videoToAdd.classList.add("relative");

      console.log(video.snippet.channelTitle);

      videoToAdd.innerHTML = `

      <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
    >
    <a href="https://www.youtube.com/"><img src=${video.snippet.thumbnails.high.url} alt=${video.snippet.channelTitle} class="w-full" /></a>
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        "${video.snippet.title}"
      </h3>
    </div>
      `;

      contentContainer.appendChild(videoToAdd);
    }
  } catch (error) {
    console.log(error);
  }
};

anotherFn(API);
