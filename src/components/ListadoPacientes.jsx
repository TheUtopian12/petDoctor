import { Pacientes } from "./Pacientes";

export const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes.length === 0);
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado de pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}{" "}
              <span className="text-indigo-600 font-bold">
                {" "}
                Pacientes y Citas
              </span>
            </p>
            {pacientes.map((paciente) => {
              return <Pacientes key={paciente.id} paciente={paciente} />;
            })}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No existen Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando tus {""}{" "}
              <span className="text-indigo-600 font-bold"> Pacientes</span>
            </p>
          </>
        )}
      </div>
    </>
  );
};
