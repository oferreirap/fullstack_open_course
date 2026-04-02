

export const Course = ({course}) => {
  console.log(course)
  const Header = ({name}) => {
    console.log(name)
    return (
      <h1>{name}</h1>
    )
  }
  const Part = ({name, exercises}) => {
    console.log(name, exercises)
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    console.log(parts)
    return parts.map(part => {
      return (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )
    })    
  }
  
  
  const Total = ({parts}) => {
    console.log(parts)
    return (
      <p><strong>Total of {parts.reduce((sum,part) => sum+part.exercises, 0 )} exercises</strong></p>
    )
  }
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}