export function H1({text}) {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
       {text}
      </h1>
    )
  }

  export function H2({text}) {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {text}
      </h2>
    )
  }
  
  export function H3({text}) {
    return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {text}
      </h3>
    )
  }

  export function H4({text}) {
    return (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {text}
      </h4>
    )
  }
  

  export function P({text}) {
    return (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {text}
      </p>
    )
  }
  
  

