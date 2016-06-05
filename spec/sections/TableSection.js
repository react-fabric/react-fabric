import React from 'react'

import Table from '../../src/Table'

const TableSection = () => (
  <section>
    <h2>Table</h2>
    <Table fixed>
      <thead>
        <tr>
          <th>File name</th>
          <th>Location</th>
          <th>Modified</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Cupcake ipsum dolor sit amet cake gummies bear claw cake.
            Chocolate chocolate bar donut.
          </td>
          <td>Candy canes bear claw marzipan icing wafer.</td>
          <td>Chocolate chocolate bar donut.</td>
          <td>Candy canes cupcake macaroon toffee.</td>
        </tr>
        <tr>
          <td>File name</td>
          <td>Location</td>
          <td>Modified</td>
          <td>Type</td>
        </tr>
        <tr>
          <td>File name</td>
          <td>Location</td>
          <td>Modified</td>
          <td>Type</td>
        </tr>
        <tr>
          <td>File name</td>
          <td>Location</td>
          <td>Modified</td>
          <td>Type</td>
        </tr>
      </tbody>
    </Table>
  </section>
)

export default TableSection
