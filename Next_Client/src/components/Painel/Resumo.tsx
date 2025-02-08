import type { EmpresaCompleta } from '@/types/types';

type Props = {
	Data: EmpresaCompleta;
	qtdCategorias: number;
	qtdProdutos: number;
};

export default function Resumo({ Data, qtdCategorias, qtdProdutos }: Props) {
	return (
		<section className="flex flex-col gap-5">
			<h2 className="text-2xl text-center font-semibold mb-2"> Visão geral da sua loja </h2>
			<div className="stats shadow stats-vertical md:stats-horizontal grid grid-cols-1 md:grid-cols-2 bg-base-200">
				<div className="stat place-items-center w-full">
					<div className="stat-title">Nome publico</div>
					<div className="stat-value capitalize">{Data.nome.split('-').join(' ')}</div>
				</div>

				<div className="stat place-items-center w-full">
					<div className="stat-title">Descrição</div>
					<div className="stat-value text-sm whitespace-normal line-clamp-3 text-ellipsis">{Data.descricao}</div>
				</div>
			</div>
			<div className="stats shadow stats-vertical md:stats-horizontal bg-base-200">
				<div className="stat place-items-center">
					<div className="stat-title">Quantidade de produtos</div>
					<div className="stat-value">{qtdProdutos}</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title">Categorias registradas</div>
					<div className="stat-value">{qtdCategorias}</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title">Tema da loja</div>
					<div className="stat-value capitalize">{Data.tema}</div>
				</div>
			</div>
		</section>
	);
}
