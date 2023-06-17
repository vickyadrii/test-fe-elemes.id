const Title = ({ title, desc }) => {
  return (
    <div>
      <h2 className="md:text-[38px] font-medium">{title}</h2>
      <p className="md:text-[38px] font-medium text-primary">{desc}</p>
    </div>
  );
};

export default Title;
