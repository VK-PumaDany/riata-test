'use client'
import Link from "next/link";

export const SideBar = () => {

  const controlPanel = 'panel-de-control'

  return (
    <div className="min-w-[280px] flex flex-col bg-red-100 min-h-[90vh] text-white">
      <ul className="menu bg-base-200 flex-1 w-full text-white">
        <li>
          <details>
            <summary>Roles</summary>
            <ul>
              <li>
                <Link  href={`${controlPanel}/roles`} >Lista de roles</Link>
              </li>
              <li>
                <a>Perfiles Con roles</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Perfiles</a>
        </li>
        <li>
          <a>Tienda</a>
        </li>
        <li>
          <details>
            <summary>Factura de materiales</summary>
            <ul>
              <li>
                <a>Registro de facturas</a>
              </li>
              <li>
                <a>Ver facturas</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Producto Fabricado</a>
        </li>
      </ul>
    </div>
  );
};
