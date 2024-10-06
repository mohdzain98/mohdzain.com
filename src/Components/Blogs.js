import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Styling/Blogs.css'

const Blogs = () => {
    useEffect(() => {
        document.title = "blogs | Mohd Zain"; 
    }, [])
  return (
    <div id='blogs' style={{padding:'2%'}}>
        <div className='container p-4' style={{marginTop:'1%'}}>
            <center>
                <p style={{fontSize:'70px', fontWeight:'lighter',color:'maroon'}}>Zain's blog</p>
            </center>
            <hr/>
            <div className='my-4' id='top'>
            <ul style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'5%'}}>
                <li><p className='topic'>Machine Learning</p></li>
                <li><p className='topic'>Deep Learning</p></li>
                <li><p className='topic'>Web Development</p></li>
                <li><p className='topic'>Large Language Models</p></li>
            </ul>
            </div>
            <hr/>
            <div style={{margin:'50px 0'}}>
                <h4><Link to='/blogs/color-images-cryptosystem' style={{textDecoration:'none'}} className='head'>
                Design of DNA based Color Images Cryptosystem and Its Security Analysis<i className="fas fa-external-link-alt fa-xs ms-2" style={{color:'blue'}}></i></Link></h4>
                <ul className='mt-4'>
                    <li><p style={{color:'black'}}>DNA based color images refer to the encoding of the color images into DNA sequences called as DNA computing. By encoding information into DNA strands, scientists can create vast amounts of data storage in a space smaller than a single grain of sand.</p></li>
                    <li><p style={{color:'black'}}>Instead of representing images using traditional pixel values the image data is converted into a sequence of DNA nucleotides (Adenine-A, Thymine-T, Cytosine-C and Guanine-G). The process of converting color images's pixel values into a DNA sequence involve mapping the pixel value of a image to specific sequence of DNA bases.</p></li>
                    <li><p style={{color:'black'}}>This research used a binary operator to design a cryptosystem that can be used to safely and losslessly encrypt color images in order to demonstrate the operator's viability with  color images as well.</p></li>
                </ul>
                <p className='d-inline me-3 text-muted inf'>40 min read</p><p className='d-inline text-muted inf'>May 2024</p>
                <ul className='list-inline'>
                    <li className='list-inline-item inf text-muted'><i class="fa-solid fa-hashtag fa-xs"></i>Image Encryption</li>
                    <li className='list-inline-item inf text-muted'><i class="fa-solid fa-hashtag fa-xs"></i>DNA</li>
                </ul>
            </div>
            <hr/>
            </div>
      
    </div>
  )
}

export default Blogs
