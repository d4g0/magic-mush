
async function getDataFromStory (storyName){
    const story = await fetch(process.env.STORY + storyName + process.env.API_CONFIG)
    const data  = await story.json()

    return {...data.story.content}
}

export default getDataFromStory