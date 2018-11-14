import React from 'react';
import { storiesOf } from '@storybook/react';
import Content from '../src/components/molecules/Content';

storiesOf('Molecule|Content', module).add('base', () => (
  <Content>
    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
      dolores eos ratione quis accusamus voluptates cum explicabo, consectetur
      labore, suscipit nulla esse nisi obcaecati. Debitis soluta vero maiores
      labore. Lorem ipsum dolor sit amet consectetur{' '}
      <code>adipisicing elit</code>. Molestiae in dolores eos ratione quis
      accusamus <a href="http://sutterlity.fr">voluptates cum explicabo</a>,
      consectetur labore, suscipit nulla esse nisi obcaecati. Debitis soluta
      vero maiores labore.
    </p>
    <p>
      Lorem ipsum <b>dolor sit</b>, amet consectetur{' '}
      <strong>adipisicing elit</strong>. Enim velit iure<sup>2</sup> eos
      <sub>2</sub> ipsa odit sint eum dolorum mollitia, <i>officia facere</i>{' '}
      soluta suscipit <em>omnis labore corporis</em>, possimus natus error quis
      quisquam?
    </p>
    <img src="https://placekitten.com/900/300" alt="" />
    <ul>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      </ul>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
    </ul>
    <ol>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      <ol>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
      </ol>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit</li>
    </ol>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>
        Words can be like X-rays, if you use them properly – they'll go through
        anything. You read and you're pierced.
      </p>
    </blockquote>
    <cite>– Aldous Huxley, Brave New World</cite>
    <pre>\n</pre>
    <hr />
    <dl>
      <dt>Coldly</dt>
      <dd>
        I now assessed her as merely a useful, but often infuriating adjunct to
        my personal life.
      </dd>
      <dt>We</dt>
      <dd>Were on the whole sensible companions.</dd>
      <dd>
        We left one another a certain freedom, and so we were able to endure our
        proximity.
      </dd>
      <dt>Such</dt>
      <dd>Was our relationship.</dd>
    </dl>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </Content>
));
