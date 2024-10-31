import matplotlib.pyplot as plt
import plotly.graph_objects as go

style = {
    "axes.facecolor": "none",  # transparent background
    "axes.edgecolor": "#DFD2E7",
    "axes.labelcolor": "#DFD2E7",
    "figure.facecolor": "#072184", # if transparent background is not possible
    "grid.color": "#DFD2E7",
    "text.color": "#DFD2E7",
    "xtick.color": "#DFD2E7",
    "ytick.color": "#DFD2E7",
    "axes.prop_cycle": plt.cycler(color=["#9FFFCB", "#F7567C", "#23967F", "#737AB6", "#88D9E6"]),
    "savefig.facecolor": "none",  # transparent background when saving
    "savefig.transparent": True,
    "savefig.dpi": 500  # high resolution
}

template = go.layout.Template(
    layout=go.Layout(
        plot_bgcolor="rgba(0,0,0,0)",  # transparent background
        paper_bgcolor="#072184",  # paper (figure) background color
        font=dict(color="#DFD2E7"),  # text color
        xaxis=dict(showgrid=True, gridcolor="#CCCCCC", title_font=dict(color="#DFD2E7"), tickfont=dict(color="#DFD2E7")),
        yaxis=dict(showgrid=True, gridcolor="#CCCCCC", title_font=dict(color="#DFD2E7"), tickfont=dict(color="#DFD2E7")),
        colorway=["#9FFFCB", "#F7567C", "#23967F", "#737AB6", "#88D9E6"],  # data line colors
    )
)