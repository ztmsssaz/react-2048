import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // مسیر فایل‌های پروژه‌ات رو اینجا وارد کن
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          2: '#fef9c3', // برای عدد 2
          4: '#fef08a', // برای عدد 4
          8: '#fde047', // برای عدد 8
          16: '#facc15', // برای عدد 16
          32: '#eab308', // برای عدد 32
          64: '#ca8a04', // برای عدد 64
          128: '#9e6100', // برای عدد 128
          256: '#7c4500', // برای عدد 256
          512: '#5a2900', // برای عدد 512
          1024: '#3a0f00', // برای عدد 1024
          2048: '#1b0000', // برای عدد 2048
        },
      },
    },
  },
  plugins: [],
}

export default config
