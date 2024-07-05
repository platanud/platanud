import React from "react";
import Card from "./Card";
import Home from "./Home";

const Menu = () => {
  return (
    <>
      <ul class="nav nav-tabs px-3" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            href="#inicio"
            aria-selected="true"
            role="tab"
          >
            Inicio
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            href="#campos"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            <i class="nf nf-md-sine_wave m-2"></i>
            Campos Electromagnéticos
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            href="#antenas"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            <i class="nf nf-md-antenna m-2"></i>
            Antenas
          </a>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content p-4">
        <div class="tab-pane fade show active" id="inicio" role="tabpanel">

         <Home />

        </div>
        <div class="tab-pane fade" id="campos" role="tabpanel">
            <Card
                header="Propagación de Ondas"
                text="Este es un texto de ejemplo que se mostrará en el cuerpo de la tarjeta."
                url="wavepropagation"

            />
        </div>
        <div class="tab-pane fade" id="antenas" role="tabpanel">
            <Card
                header="Polarización"
                text="Este es un texto de ejemplo que se mostrará en el cuerpo de la tarjeta."
                url="polarization"
            />
        </div>
      </div>
    </>
  );
};

export default Menu;
