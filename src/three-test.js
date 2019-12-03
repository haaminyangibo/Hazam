import React from 'react'
import * as THREE from "three";


export default class Three extends React.Component {

   
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, 100/100, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( 200,200 );
        renderer.setClearColor( 0x000000, 0 );
        // debugger 
        let cubeElement = document.getElementById(this.props.cubeID)
        cubeElement.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: this.props.color} );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
        requestAnimationFrame( animate )
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };   
         animate()   
        console.log("hello ")
    }
    render() {
        return (
          <div />
        )
      }


}