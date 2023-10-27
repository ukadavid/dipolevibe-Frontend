import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './src/Components/DashboardUpdate/css/tailwind.config'

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}