import { useRef } from 'react'

type PrivateProps = {
  project: string,
  close: any
}

const GalleryModal = ({ project, close }: PrivateProps ) => {
  const modalRef = useRef(null)

  return (
    <>
      <div />
      <div>
        {project === 'snapshot' && <h1>Snapshot pictures</h1>}
        {project === 'coming to terms' && <h1>Coming to Terms pictures</h1>}
      </div>
    </>
  )
}

export default GalleryModal