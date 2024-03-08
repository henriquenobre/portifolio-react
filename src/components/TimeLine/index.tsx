export const TimeLine = () => {
  return (
    <div className="w-full flex gap-4 sm:flex-col items-center justify-center">
      <div className="flex h-96 flex-col justify-between sm:w-4/5 sm:h-2 sm:flex-row">
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
      </div>
      <div className="mt-2 h-96 w-1 bg-white flex flex-col sm:flex-row justify-between items-center sm:w-4/5 sm:h-2">
        <div
          style={{ width: 20, height: 20 }}
          className="rounded-full bg-white"
        ></div>
        <div
          style={{ width: 20, height: 20 }}
          className="rounded-full bg-white"
        ></div>
        <div
          style={{ width: 20, height: 20 }}
          className="rounded-full bg-white"
        ></div>
        <div
          style={{ width: 20, height: 20 }}
          className="rounded-full bg-white"
        ></div>
      </div>
      <div className="flex h-96 flex-col sm:flex-row justify-between mt-2 text-center sm:w-4/5 sm:h-2">
        <div className="w-28">
          Técnico em Informática
          <br /> FUNORTE
        </div>
        <div className="w-28">
          Desenvolvedor Front JS <br />
          See All
        </div>
        <div className="w-28">
          Desenvolvedor Front React Native
          <br /> Oduh
        </div>
        <div className="w-28">
          Desenvolvedor Front React <br />
          Lello Condomínios
        </div>
      </div>
    </div>
  );
};
