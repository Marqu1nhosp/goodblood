import Logo from "../../components/Logo";

export default function CommonQuestions() {
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className='relative left-16'>
                <Logo />
            </div>
            <p className="text-[#00FFFF] text-4xl">Perguntas Frequentes.</p>
        </div>
        <div className="pt-6 pl-6">
            <p className="text-white text-xl font-semibold">Com que Frequência posso doar?</p>
            <p className="text-white text-sm pt-1">Para mulheres, o intervalo mínimo entre doações de sangue total deve ser de três meses, não ultrapassando três doações ao ano e para homens, deve ser de dois meses, não ultrapassando quatro vezes ao ano. A doação de plaquetas por aférese pode ser feita a cada 48 horas, não ultrapassando quatro doações no mês e 24 ao ano.</p>

            <p className="text-white text-xl font-semibold pt-3">Como eu devo me preparar para a doação de sangue?</p>
            <p className="text-white text-sm pt-1">Sugerimos que você tenha uma refeição balanceada, beba grande quantidade de líquidos (suco ou água), pelo menos quatro horas antes de doar sangue. É importante também que você tenha tido uma boa noite de sono (pelo menos 6 horas) nas últimas 24 horas.</p>

            <p className="text-white text-xl font-semibold pt-3">Como vou me sentir após a doação de sangue?</p>
            <p className="text-white text-sm pt-1">A maioria das pessoas sente-se bem após uma doação de sangue. Entretanto, algumas pessoas apresentam reações adversas passageiras, tais como tontura, náusea, sudorese, mal-estar ou desmaio, na maioria das vezes, de fundo emocional. Pode haver algum extravasamento de sangue, com formação de equimose ou hematoma (coleção de sangue) sob a pele no local da punção, durante ou após da punção da veia do braço, independentemente da habilidade do funcionário que fará a coleta do sangue. Na ocorrência de qualquer reação adversa sempre existe atendimento médico imediato. Para ajudar a prevenir a ocorrência desses eventos é importante ter uma alimentação adequada, ingerir grande quantidade de líquidos, e no dia da doação não levantar pesos com o membro que fora puncionado.
            </p>

            <p className="text-white text-xl font-semibold pt-3">Posso praticar esportes após a doação de sangue?</p>
            <p className="text-white text-sm pt-1">Você só poderá praticar esportes 12 horas após a doação de sangue. Beba grande quantidade de líquidos e se você se sentir bem, inicie com uma atividade leve, evitando levantar pesos com o membro envolvido na doação. Se você for competidor aguarde um período de 72 horas para reiniciar os treinamentos.</p>

            <p className="text-white text-xl font-semibold pt-3">Qual o destino do meu sangue após a doação?</p>
            <p className="text-white text-sm pt-1">Após a doação, o sangue é separado em três componentes (hemácias, plaquetas e plasma), que são utilizados em diferentes pacientes. Cada hemocomponente é utilizado para uma determinada finalidade e tem uma validade específica (ver Doação passo a passo) – para ser lido após a doação.</p>

        </div>
        </>
    )
}