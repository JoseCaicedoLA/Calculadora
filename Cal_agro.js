window.onload = function()
{
  var ancho_aspersion = document.getElementById('ancho_asp');
  var distancia = document.getElementById('dis_r');
  var consumo = document.getElementById('con_asp');
  var tiempo = document.getElementById('tiem_asp');
  var capacidad_asperj = document.getElementById('cap_equi');
  var dosis_recomendada = document.getElementById('dos_rec');
  var superficie = document.getElementById('sup_asp');
  var boton = document.getElementById('boton');

  boton.addEventListener("click", calcular_cli);

  function calcular_cli()
  {
    var an_as = parseInt(ancho_aspersion.value);
    var dis = parseInt(dis_r.value);
    var con = parseInt(consumo.value);
    var tiem = parseInt(tiempo.value);
    var sup = parseInt(superficie.value);
    var dosis_r = parseInt(dosis_recomendada.value);
    var capacidad_asperjadora = parseInt(capacidad_asperj.value);
    var factor;
    var consumo_h20;
    var cap_asperjada;
    var dosis_a;

    factor = sup / (dis * (an_as / 100));
    consumo_h20 = factor * con;
    cap_asperjada = consumo_h20 / capacidad_asperjadora;
    dosis_a = (dosis_r * 1000) / ((cap_asperjada / sup) * 10000);
    document.write("Dosis a aplicar: " + dosis_a + "ml/aspersora");
  }
};
