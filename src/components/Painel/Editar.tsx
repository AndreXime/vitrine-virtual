import type { Dispatch, SetStateAction } from 'react';

type DataType = {
	nome: string;
	desc: string;
	tema: string;
	qtdProdutos: string;
	categorias: string[];
};

type Props = {
	Data: DataType;
	setData: Dispatch<SetStateAction<DataType>>;
};
export default function Editar({ Data, setData }: Props) {
	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset',
		'caramellatte',
		'abyss',
		'silk',
	];

	return (
		<section className="flex flex-col gap-5">
			<h2 className="text-2xl text-center font-semibold mb-2"> Edite tudo sobre sua loja </h2>

			<div className="card w-full bg-base-100 shadow">
				<div className="card-body">
					<h2 className="text-2xl font-bold">Editar dados</h2>
					<div className="join join-vertical mt-6 w-full grid grid-cols-1 md:grid-cols-3">
						<label className="form-control w-full max-w-xs mb-4">
							<div className="label">
								<span className="label-text">Mude o nome da loja</span>
							</div>
							<input
								type="text"
								className="input input-bordered w-full max-w-xs"
								defaultValue={Data.nome}
							/>
						</label>

						<label className="form-control w-full max-w-xs mb-4">
							<div className="label">
								<span className="label-text">Mude sua descrição</span>
							</div>
							<textarea
								className="textarea w-full max-w-xs h-32"
								defaultValue={Data.desc}></textarea>
						</label>

						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">Informações de contato</span>
							</div>
							<textarea
								className="textarea w-full max-w-xs h-32"
								defaultValue={Data.desc}></textarea>
						</label>
					</div>
					<button
						onClick={() => setData((prevData) => ({ ...prevData, nome: 'Teste' }))}
						className="btn btn-primary mt-5">
						Salvar
					</button>
				</div>
			</div>

			<div className="card w-full bg-base-100 shadow">
				<div className="card-body">
					<span className="badge badge-sm badge-warning">Dezenas de temas!</span>
					<h2 className="text-2xl font-bold">Mudar o tema</h2>
					<div className="join join-vertical mt-6 grid grid-cols-3 lg:grid-cols-12 gap-2 text-xs">
						{themes.map((value) => (
							<input
								data-theme={value}
								key={value}
								type="radio"
								name="theme-buttons"
								className="btn theme-controller join-item col-span-1 capitalize"
								aria-label={value}
								value={value}
							/>
						))}
					</div>
					<button
						onClick={() => {}}
						className="btn btn-primary mt-5">
						Salvar
					</button>
				</div>
			</div>
		</section>
	);
}
