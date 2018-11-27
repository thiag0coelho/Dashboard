import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout'

class App extends Component {
  render() {
    return (
        <Layout>
          <div id="area_dados" className="dados">
              <div className="paineis_dashboard">
                <div className="painel_dashboard largura25 atendimento">
                  <div>
                    <h2>Atendimento</h2>
                    <a href="atendimento/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>215</span>
                          <label>atendimentos realizados</label>
                        </li>
                        <li className="secundario">
                          <label>tempo médio</label>
                          <span>5min</span>
                        </li>
      
                        <li>
                          <ul>
                            <li>
                              <span>100</span>
                              <label>consultas débitos</label>
                            </li>
                            <li>
                              <span>50</span>
                              <label>emissões de 2ª via da fatura</label>
                            </li>
                            <li>
                              <span>100</span>
                              <label>solicitações</label>
                            </li>
                            <li>
                              <span>20</span>
                              <label>reclamações</label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 servicos alerta">
                  <div>
                    <h2>Serviços</h2>
                    <a href="servicos/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>800</span>
                          <label>programados</label>
                        </li>
                        <li className="secundario">
                          <ul>
                            <li>
                              <span>50</span>
                              <label>pendentes</label>
                            </li>
                            <li className="vermelho">
                              <span>20</span>
                              <label>cancelados</label>
                            </li>
                            <li className="verde">
                              <span>40</span>
                              <label>executados</label>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="alerta">
                              <span>215</span>
                              <label>fora do prazo</label>
                            </li>
                            <li className="azul">
                              <span>2h</span>
                              <label>média de execução</label>
                            </li>
                            <li>
                              <span>30</span>
                              <label>religações</label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 arrecadacao atencao">
                  <div>
                    <h2>Arrecadação</h2>
                    <a href="arrecadacao/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="secundario">
                          <ul>
                            <li className="destaque">
                              <span>R$ 205.133,25</span>
                              <label>à receber</label>
                            </li>
                            <li><span>R$ 421.678.102,43</span><label>pública</label> </li>
                            <li><span>R$ 147.258.369,12</span><label>industrial</label> </li>
                            <li><span>R$ 32.165.498,70</span><label>comercial</label> </li>
                            <li><span>R$ 32.165.498,70</span><label>residencial</label> </li>
                          </ul>
                        </li>
      
                        <li>
                          <ul>
                            <li>
                              <span>R$ 55.025,35</span>
                              <label>contas pagas</label>
                            </li>
                            <li>
                              <span>2.144</span>
                              <label>negociações efetuadas</label>
                            </li>
                            <li className="vertical">
                              <ul>
                                <li>
                                  <span>13.500</span>
                                  <label>faturas DAC</label>
                                </li>
                                <li>
                                  <span>20%</span>
                                  <label>negociações</label>
                                </li>
                                <li>
                                  <span>6,45%</span>
                                  <label>inadimp.</label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 leituras alerta">
                  <div>
                    <h2>Leituras</h2>
                    <a href="leituras/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>3.000</span>
                          <label>leituras efetuadas</label>
                        </li>
      
                        <li>
                          <ul>
                            <li>
                              <span>2.000</span>
                              <label>rotas leitura</label>
                            </li>
                            <li>
                              <span>5%</span>
                              <label>de rotas enviadas</label>
                            </li>
                            <li>
                              <span>20%</span>
                              <label>de rotas recebidas</label>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="alerta">
                              <span>20</span>
                              <label>impressão avisos corte</label>
                            </li>
                            <li className="vertical">
                              <ul>
                                <li>
                                  <span>10</span>
                                  <label>ocorrências</label>
                                </li>
                                <li>
                                  <span>200</span>
                                  <label>leituristas</label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 faturamento">
                  <div>
                    <h2>Faturamento</h2>
                    <a href="faturamento/index.php"></a>
                    <div className="indicadores">
                      <ul>
      
                        <li className="secundario">
                          <ul>
                            <li className="destaque">
                              <span>R$ 1.070.000,00</span>
                              <label>resumo</label>
                            </li>
                            <li><span>R$ 330.000,00</span><label>água</label></li>
                            <li><span>R$ 200.000,00</span><label>esgoto</label></li>
                            <li><span>R$ 540.000,00</span><label>serviços</label></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <span>7.352</span>
                              <label>demonst. economias</label>
                            </li>
                            <li>
                              <span>2.144m&sup3;</span>
                              <label>índice consumo</label>
                            </li>
                            <li className="vertical">
                              <ul>
                                <li>
                                  <span>34.701</span>
                                  <label>fat. emitidas</label>
                                </li>
                                <li>
                                  <span>2.015</span>
                                  <label>refaturam.</label>
                                </li>
                                <li>
                                  <span>4.443</span>
                                  <label>parcelam.</label>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 operacional atencao">
                  <div>
                    <h2>Operacional</h2>
                    <a href="operacional/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>040</span>
                          <label>total de serviços</label>
                        </li>
                        <li className="secundario">
                          <label>tempo médio</label>
                          <span>2h</span>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <span>40</span>
                              <label>serviços fora do prazo</label>
                            </li>
                            <li>
                              <span>40</span>
                              <label>equipes em campo</label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 hidrometria atencao">
                  <div>
                    <h2>Hidrometria</h2>
                    <a href="hidrometria/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>888.000</span>
                          <label>hidrômetros instalados</label>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <span>780.000</span>
                              <label>un. com hidrômetro</label>
                            </li>
                            <li>
                              <span>20.000</span>
                              <label>un. sem hidrômetro</label>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <span>5%</span>
                              <label>hidrômetro substituídos</label>
                            </li>
                            <li>
                              <span>9%</span>
                              <label>hidrômetros avariados</label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
      
                <div className="painel_dashboard largura25 juridico">
                  <div>
                    <h2>Jurídico</h2>
                    <a href="juridico/index.php"></a>
                    <div className="indicadores">
                      <ul>
                        <li className="destaque">
                          <span>88.000</span>
                          <label>unidades em processo</label>
                        </li>
                        <li className="secundario colunas">
                          <div>
                            <ul>
                              <li className="total">
                                <span>10.210</span>
                                <br />
                                <label>faturas em processo</label>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li> <span>3.020</span><label>administrativo</label> </li>
                              <li> <span>7.190</span><label>judicial</label> </li>
                            </ul>
                          </div>
                        </li>
                        <li className="colunas">
                          <div>
                            <ul>
                              <li>
                                <span>5.200</span>
                                <label>notificações imp.</label>
                              </li>
                              <li>
                                <span>2.500</span>
                                <label>CDA impressas</label>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <span>200</span>
                                <br />
                                <label>DA canceladas</label>
                              </li>
                              <li>
                                <span>2.200</span>
                                <br />
                                <label>faturas em DA</label>
                              </li>
                              <li>
                                <span>1.400</span>
                                <br />
                                <label>em execução</label>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                      <div className="grafico"></div>
                    </div>
                  </div>
                </div>
                <div className="clearfloat"></div>
              </div>
            </div>
        </Layout>
      )
  }
}

export default App;
