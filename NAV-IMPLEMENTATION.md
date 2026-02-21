# Navigation Menu - Implementation Guide

## Pages Updated:
✅ index.html - DONE
✅ about.html - DONE  
✅ key-concepts.html - DONE

## Pages Still Need Navigation:
- exam-technique.html
- exam-practice.html
- marking-practice.html
- progress-tracker.html
- upload-assess.html
- discussion.html

## CSS to Add (in <style> section):

```css
/* Discreet Navigation Menu */
.nav-menu {
    text-align: center;
    padding: 0.75rem 0;
}

.nav-menu-inner {
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 0.75rem 2rem;
    border-radius: 0.3rem;
}

.nav-menu a {
    display: inline-block;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s;
    border-radius: 0.2rem;
}

.nav-menu a:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}
```

## HTML to Add (inside .page-header, after tagline):

```html
<!-- Discreet Navigation Menu -->
<nav class="nav-menu">
    <div class="nav-menu-inner">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="key-concepts.html">Key Concepts</a>
        <a href="exam-technique.html">Exam Technique</a>
        <a href="exam-practice.html">Practice</a>
        <a href="marking-practice.html">Marking</a>
        <a href="progress-tracker.html">Progress</a>
    </div>
</nav>
```

## Also Update:
Change header padding from `padding: 3rem 4rem;` to `padding: 3rem 4rem 2rem 4rem;` to accommodate menu

## Mobile Responsive (if needed):
```css
@media screen and (max-width: 42em) {
    .nav-menu a {
        padding: 0.4rem 0.75rem;
        margin: 0.2rem;
        font-size: 0.85rem;
    }
}
```
