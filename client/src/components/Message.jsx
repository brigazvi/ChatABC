export default function Message({ obj }) {
  return (
    <div>
      <div>{obj.content}</div>
      <div className="text-xs text-slate-300">{obj.author}</div>
      <div>{obj.date}</div>
    </div>
  )
}
