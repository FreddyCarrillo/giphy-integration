export const GiftItem = ({gift}) => {
  return (
    <div>
      <img src={gift.url} alt={gift.title}/>
      <div>
        { gift.title }
      </div>
    </div>
  )
}
