type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => (
        <button className="p-2 rounded-lg text-gray-100 bg-sky-500 hover:bg-sky-700">{text}</button>
  
)

export default Button
