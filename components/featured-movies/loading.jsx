import Loading from '@/components/loading'

import styles from './style.module.css'

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  )
}

export default FeatureMovieLoading
