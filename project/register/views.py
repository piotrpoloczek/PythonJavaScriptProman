from flask import Flask, render_template, request, redirect, url_for
from register import register_bp

@register_bp.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('register/index.html')