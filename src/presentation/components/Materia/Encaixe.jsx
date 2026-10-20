import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Materia.module.css';

export function Encaixe() {
  const { encaixe } = perfil;

  return (
    <Secao
      id="encaixe"
      rotulo="Onde me encaixo"
      titulo="Rendo mais onde posso propor e executar"
      descricao={encaixe.introducao}
    >
      <div className={`${styles.tabelaCaixa} revelar`}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th scope="col">Área</th>
              <th scope="col">Encaixe hoje</th>
              <th scope="col">Por quê</th>
            </tr>
          </thead>
          <tbody>
            {encaixe.linhas.map((linha) => (
              <tr key={linha.area}>
                <th scope="row">{linha.area}</th>
                <td className={styles[linha.tom]}>{linha.nivel}</td>
                <td>{linha.porque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.proximoPasso}>
        <strong>Próximo passo:</strong> {encaixe.proximoPasso}
      </p>
    </Secao>
  );
}
