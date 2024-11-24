export default function Album() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <h1 className=" text-white">Nottefoto</h1>
        <div className="flex flex-col gap-2">
          <input className="" type="text" placeholder="Användarnamn" />
          <input type="password" placeholder="Lösenord" />
        </div>
        <button className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          Logga in
        </button>
      </div>
    </div>
  );
}
