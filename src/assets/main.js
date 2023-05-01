
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCMLfk7AF7bTwXlB05hUQQ9w&part=snippet%2Cid&order=date&maxResults=50';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fbec645cf8msh4e3f10d70767658p1b018cjsn7b0181e012c9',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

async function fecthData(urlApi) {
    const response = await fecth(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fecthData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md 
            overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `),slice(0,4).join('')}           
        `;
        content.innerHTML = view;
        console.log(videos);
    } catch (error){
        console.log(error);
    }
});