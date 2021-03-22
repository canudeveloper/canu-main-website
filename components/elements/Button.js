import 'twin.macro'

export default function Button({ children }) {
  return (
    <button
      tw='px-2.5 py-1.5 rounded font-bold uppercase leading-none text-button tracking-button bg-secondary text-white hover:bg-secondary-light'
      type='button'
    >
      {children}
    </button>
  )
}
