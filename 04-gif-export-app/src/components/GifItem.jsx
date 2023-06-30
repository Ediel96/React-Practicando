
export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <img alt={title} src={url} />
        <p>{title}</p>
    </div>
  )
}
