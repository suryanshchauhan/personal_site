const SkillsSection = () => {
  return (
    <Container id='skills'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="relative overflow-hidden py-8">

export default SkillsSection;
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray to-transparent pointer-events-none"></div>
        
        {/* Single continuous scrolling strip */}
        <div className="flex gap-8 md:gap-12 animate-scroll-continuous whitespace-nowrap">
          {/* Repeat the technologies many times to create continuous effect */}
          {Array.from({ length: 10 }).map((_, setIndex) => 
            TECHNOLOGIES.map((technology, techIndex) => (
              <div key={`${setIndex}-${techIndex}`} className="flex-shrink-0 w-20 md:w-24 flex justify-center">
                <TechDetails {...technology} />
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};