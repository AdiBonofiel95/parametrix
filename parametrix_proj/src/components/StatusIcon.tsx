type Props = {color: string}

export default function StatusIcon(props: Props) {
  return (
    <div style={{borderRadius: '100%', backgroundColor: props.color, width: '8px', height: '8px'}}></div>
  )
}