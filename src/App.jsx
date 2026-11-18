import { useState } from 'react'
import {
  Armchair, Bath, BedDouble, Boxes, ChevronDown, CircleHelp, Columns3,
  Download, Home, LampDesk, Layers3, Lightbulb, Menu, Moon, MoreHorizontal,
  PanelLeft, Play, Plus, RotateCcw, Ruler, Save, Search, Settings,
  Sofa, Sun, Upload, UtensilsCrossed, Zap
} from 'lucide-react'
import './App.css'

const rooms = [
  { name: 'Living Room', area: '42 m²', icon: Sofa, active: true },
  { name: 'Master Bedroom', area: '28 m²', icon: BedDouble },
  { name: 'Kitchen', area: '18 m²', icon: UtensilsCrossed },
  { name: 'Bathroom', area: '12 m²', icon: Bath },
]

function App() {
  const [lightsOn, setLightsOn] = useState(true)
  const [temperature, setTemperature] = useState(4000)
  const [activeMode, setActiveMode] = useState('Design')
  const [activeRoom, setActiveRoom] = useState('Living Room')

  return (
    <div className="studio">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Layers3 size={17} /></div>
          <span>LUMINA</span>
        </div>
        <div className="project-picker">
          <span className="project-name">Forest Residence</span>
          <ChevronDown size={14} />
          <span className="saved"><span /> Saved</span>
        </div>
        <div className="top-actions">
          <button className="icon-button"><UndoIcon /></button>
          <button className="icon-button muted"><RotateCcw size={16} /></button>
          <span className="divider" />
          <button className="text-button"><Save size={15} /> Save</button>
          <button className="export-button"><Download size={15} /> Export <ChevronDown size={13} /></button>
        </div>
      </header>

      <aside className="rail">
        <button className="rail-button active"><PanelLeft size={19} /></button>
        <button className="rail-button"><Boxes size={19} /></button>
        <button className="rail-button"><Lightbulb size={19} /></button>
        <button className="rail-button"><Zap size={19} /></button>
        <button className="rail-button bottom"><Settings size={19} /></button>
      </aside>

      <aside className="left-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">PROJECT</span>
            <h2>Rooms</h2>
          </div>
          <button className="small-button"><Plus size={16} /></button>
        </div>

        <div className="room-list">
          {rooms.map(({ name, area, icon: Icon }) => (
            <button
              key={name}
              className={`room-item ${activeRoom === name ? 'active' : ''}`}
              onClick={() => setActiveRoom(name)}
            >
              <Icon size={17} />
              <span><b>{name}</b><small>{area}</small></span>
            </button>
          ))}
        </div>

        <div className="panel-section">
          <div className="section-title">
            <span>LIGHTING SCENE</span>
            <button><Plus size={14} /></button>
          </div>
          <button className="scene-select">
            <span className="scene-icon"><Sun size={15} /></span>
            <span><b>Warm Evening</b><small>6 active fixtures</small></span>
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="panel-section">
          <div className="section-title"><span>FIXTURES</span><button><Plus size={14} /></button></div>
          <div className="fixture-list">
            <button><LampDesk size={16} /><span>Pendant</span><b>4</b></button>
            <button><Lightbulb size={16} /><span>Downlight</span><b>8</b></button>
            <button><Columns3 size={16} /><span>Wall wash</span><b>3</b></button>
          </div>
        </div>

        <button className="upload-button"><Upload size={15} /> Upload floor plan</button>
      </aside>

      <main className="canvas-area">
        <div className="canvas-toolbar">
          <div className="mode-tabs">
            {['Design', 'Lighting', 'Electrical'].map(mode => (
              <button
                key={mode}
                className={activeMode === mode ? 'active' : ''}
                onClick={() => setActiveMode(mode)}
              >
                {mode === 'Lighting' && <Lightbulb size={14} />}
                {mode === 'Electrical' && <Zap size={14} />}
                {mode}
              </button>
            ))}
          </div>
          <div className="view-tools">
            <button><Ruler size={15} /></button>
            <button className="active"><Layers3 size={15} /></button>
            <button><Search size={15} /></button>
          </div>
        </div>

        <div className={`viewport ${lightsOn ? 'lights-on' : 'lights-off'}`}>
          <div className="floor-plan">
            <div className="wall wall-back">
              <div className="wall-art art-one" /><div className="wall-art art-two" />
              <div className="window">
                <div className="sky" />
                <div className="window-frame v" /><div className="window-frame h" />
                <div className="curtain left" /><div className="curtain right" />
              </div>
            </div>
            <div className="wall wall-left">
              <div className="left-art" />
              <div className="door"><div className="door-glass" /></div>
            </div>
            <div className="floor">
              <div className="rug" />
              <div className="sofa">
                <div className="sofa-back" /><div className="sofa-seat" />
                <div className="cushion c1" /><div className="cushion c2" />
                <div className="sofa-arm left" /><div className="sofa-arm right" />
              </div>
              <div className="coffee-table"><div className="table-top" /></div>
              <div className="plant"><div className="leaf l1" /><div className="leaf l2" /><div className="leaf l3" /><div className="pot" /></div>
              <div className="side-table"><div className="lamp" /></div>
              <div className="pendant p1"><i /><b /></div>
              <div className="pendant p2"><i /><b /></div>
              <div className="light-beam beam1" /><div className="light-beam beam2" />
            </div>
          </div>
          <div className="canvas-badge"><span /> 3D VIEW</div>
          <div className="view-controls">
            <button><Plus size={14} /></button><button><span>−</span></button>
            <button><Home size={14} /></button>
          </div>
        </div>

        <div className="bottom-controls">
          <button className="play-button"><Play size={15} fill="currentColor" /></button>
          <button className="camera-button"><span /> Perspective <ChevronDown size={13} /></button>
          <div className="lighting-switch">
            <button className={!lightsOn ? 'active' : ''} onClick={() => setLightsOn(false)}><Moon size={13} /></button>
            <button className={lightsOn ? 'active' : ''} onClick={() => setLightsOn(true)}><Sun size={13} /></button>
          </div>
        </div>
      </main>

      <aside className="right-panel">
        <div className="right-tabs">
          <button className="active">Properties</button>
          <button>Materials</button>
        </div>

        <div className="selected-object">
          <div className="fixture-preview"><LampDesk size={25} /></div>
          <div><span>SELECTED FIXTURE</span><h3>Pendant Light P1</h3></div>
          <button><MoreHorizontal size={17} /></button>
        </div>

        <div className="control-section">
          <div className="control-label"><span>Brightness</span><b>{lightsOn ? '78' : '0'}%</b></div>
          <input
            type="range"
            min="0"
            max="100"
            value={lightsOn ? 78 : 0}
            onChange={e => setLightsOn(Number(e.target.value) > 0)}
            disabled={!lightsOn}
          />
          <div className="range-ticks"><span>0</span><span>50</span><span>100</span></div>
        </div>

        <div className="control-section">
          <div className="control-label"><span>Color temperature</span><b>{temperature / 1000}k</b></div>
          <input
            className="temp-range"
            type="range"
            min="2700"
            max="6500"
            step="100"
            value={temperature}
            onChange={e => setTemperature(Number(e.target.value))}
          />
          <div className="temp-labels"><span>Warm</span><span>Neutral</span><span>Cool</span></div>
        </div>

        <div className="control-section two-columns">
          <label><span>Power</span><b>12 W</b></label>
          <label><span>Beam angle</span><b>40°</b></label>
        </div>

        <div className="control-section">
          <div className="control-label"><span>Circuit</span><b><Zap size={12} /> L1</b></div>
          <button className="circuit-select">Downlights — Zone A <ChevronDown size={14} /></button>
        </div>

        <div className="power-card">
          <div className="power-head"><span><Zap size={15} /> Power load</span><b>Healthy</b></div>
          <div className="load-track"><div /></div>
          <div className="load-values"><span>1.84 kW</span><span>2.5 kW capacity</span></div>
        </div>

        <button className="analyze-button"><Zap size={15} /> Run load analysis</button>
      </aside>
    </div>
  )
}

function UndoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 14 4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 6 6v1" />
    </svg>
  )
}

export default App
