  export const useMapGift = (dataGifts) => {
    return dataGifts.map((gift)=>({
      id: gift.id,
      title: gift.title,
      url: gift.images.downsized_medium.url
    }))
  }
  