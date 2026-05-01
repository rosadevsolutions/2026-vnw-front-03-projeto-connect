import AppRoutes from '@/components/shared/Main/AppRoutes/AppRoutes'
import "./Main.scss"

export default function Main() {
  return (
    <main className='main__wrapper'>
      <div className="main__container">
        <AppRoutes />
      </div>
    </main>
  )
}
